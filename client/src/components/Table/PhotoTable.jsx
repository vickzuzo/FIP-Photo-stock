import React, { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useDisclosure } from "../../hooks";
import UserService from "../../network/service/UserService";
import AddNewPhotoModal from "../ModalComps/AddNewPhotoModal";
import { StyledEditButton, TableContainer } from "./styles";

const PhotoTable = ({ data, columns, isUser }) => {
  const [selected, setSelected] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const queryClient = useQueryClient();

  const onCloseModal = () => {
    setSelected(null);
    onClose();
  };

  const { isLoading, mutate: deletePhoto } = useMutation(
    (id) => UserService.deletePhoto(id),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["user_all_photos"]);
        toast.success(data.message, {
          position: "top-right",
          duration: 5000,
        });
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
  return (
    <TableContainer>
      <table>
        <thead>
          {columns.map((column, idx) => (
            <th key={idx}>{column}</th>
          ))}
          {isUser && <th>Actions</th>}
        </thead>
        <tbody>
          {data?.map((photo, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <img src={photo.imageUrl} alt="upload" />
                </td>
                <td>{photo.title}</td>
                {!isUser && (
                  <>
                    <td>{photo.postedBy.username}</td>
                    <td>{photo.postedBy.email}</td>
                  </>
                )}
                {isUser && (
                  <td className="actions_buttons">
                    <StyledEditButton
                      onClick={() => {
                        setSelected(photo);
                        onOpen();
                      }}
                      className="auth add_btn"
                    >
                      <AiOutlinePlus />
                      EDIT
                    </StyledEditButton>
                    <StyledEditButton
                      isLoading={isLoading}
                      onClick={() => {
                        deletePhoto(photo._id);
                      }}
                      className="auth add_btn delete"
                    >
                      <AiOutlineDelete />
                      DELETE
                    </StyledEditButton>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddNewPhotoModal
        isOpen={isOpen}
        prev={selected}
        onClose={onCloseModal}
      />
    </TableContainer>
  );
};

export default PhotoTable;
