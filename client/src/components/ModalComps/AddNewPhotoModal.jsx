import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import Modal from "../Modal";
import { StyledImagePreviewContainer, StyledModalFooter } from "./styles";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import UserService from "../../network/service/UserService";

const AddNewPhotoModal = ({ prev, isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [prevImage, setPrevImage] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [subscription, setSubscription] = useState("free");
  const [preview, setPreview] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    setTitle(prev ? prev.title : "");
    setPrevImage(prev ? prev.imageUrl : "");
    setSubscription(prev ? prev.subscription : "free");
  }, [prev]);

  useEffect(() => {
    if (!selectedImage) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const onSelectedImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(undefined);
      return;
    }
    setSelectedImage(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const formData = new FormData();
  formData.append("title", title);
  formData.append("image", selectedImage);
  formData.append("subscription", subscription);

  const { isLoading, mutate } = useMutation(
    () => UserService.addPhoto(formData),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["all_photos"]);
        toast.success(data.message, {
          position: "top-right",
          duration: 5000,
        });
        onClose();
        setSelectedImage(undefined);
        setTitle("");
      },
      onError: (err) => {
        toast.error(err.response.data, {
          status: "error",
          title: err.response.data,
          position: "top-right",
          duration: 5000,
        });
      },
    }
  );

  const { isLoading: isEditLoading, mutate: updatePhoto } = useMutation(
    () => UserService.updatePhoto(formData, prev._id),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["user_all_photos"]);
        toast.success(data.message, {
          position: "top-right",
          duration: 5000,
        });
        onClose();
        setSelectedImage(undefined);
        setTitle("");
      },
      onError: (err) => {
        toast.error(err.response.data, {
          status: "error",
          title: err.response.data,
          position: "top-right",
          duration: 5000,
        });
      },
    }
  );

  const loading = isLoading || isEditLoading;
  const disabled = !title || !selectedImage || loading;
  const isEditingDisabled = !title || loading;

  const onCancelClick = () => {
    setTitle("");
    setPrevImage("");
    setSelectedImage("");
    setSubscription("");
    setPreview("");
    onClose();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutate();
  };
  const onEditSubmit = (e) => {
    e.preventDefault();
    updatePhoto();
  };

  return (
    <Modal
      title={prev ? "Edit Photo" : "Add New photo"}
      titlePos="center"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Input
        placeholder="Image Title"
        label="Image Title"
        value={title}
        onChange={handleTitleChange}
      />
      <Input placeholder="Image URL" type="file" onChange={onSelectedImage} />
      <StyledImagePreviewContainer>
        {prevImage && (
          <div className="image_holder">
            <p>Previous</p>
            <img src={prevImage} alt="previous" />
          </div>
        )}
        {preview && (
          <div className="image_holder">
            <p>Preview</p>
            <img src={preview} alt={preview} />
          </div>
        )}
      </StyledImagePreviewContainer>
      <label style={{ margin: "0px 10px" }}>
        <input
          type="radio"
          value="free"
          checked={subscription === "free"}
          onChange={() => setSubscription("free")}
          style={{ marginRight: "10px" }}
        />
        Free
      </label>
      <label style={{ margin: "0px 10px" }}>
        <input
          type="radio"
          value="premium"
          checked={subscription === "premium"}
          onChange={() => setSubscription("premium")}
          style={{ marginRight: "10px" }}
        />
        Premium
      </label>

      <StyledModalFooter>
        <Button className="cancel_btn" onClick={onCancelClick}>
          Cancel
        </Button>
        <Button
          isLoading={loading}
          onClick={prev ? onEditSubmit : onSubmit}
          disabled={prev ? isEditingDisabled : disabled}
        >
          {prev ? "Save" : "Upload"}
        </Button>
      </StyledModalFooter>
    </Modal>
  );
};

export default AddNewPhotoModal;
