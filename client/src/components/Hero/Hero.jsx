import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContainer, StyledHero, StyledHeroContainer } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  const [selectedOption, setSelectedOption] = useState("vector");
  const navigate = useNavigate();
  return (
    <StyledHeroContainer>
      <StyledHero>
        <h1>Find over 1 Million+ Stock Assets for your creative Project</h1>
        <p>
          Professional Quality Creative resources to get your project done
          faster
        </p>
        <SearchContainer>
          <select onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="vectors">Vectors</option>
            <option value="photos">Photos</option>
            <option value="illustrations">Illustrations</option>
          </select>
          <div className="search">
            <input placeholder={`Search for ${selectedOption}`} />
            <button>
              <AiOutlineSearch />
            </button>
          </div>
        </SearchContainer>
      </StyledHero>
    </StyledHeroContainer>
  );
};

export default Hero;
