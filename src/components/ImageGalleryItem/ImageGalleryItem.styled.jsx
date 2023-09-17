import styled from 'styled-components';

export const GalleryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  opacity: 0;
  width: 50%;
  max-width: 150px;
  height: 100%;
  padding: 10px;
  text-align: start;
  font-size: 24px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.488);
  transition: opacity 0.3s ease, left 0.3s ease;
`;

export const GalleryItem = styled.li`
  position: relative;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;

  height: 450px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover img {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transform: scale(1.05);
    filter: blur(3px);
  }
  &:hover {
    cursor: pointer;
    box-shadow: rgba(255, 255, 255, 0.152) 0px 10px 50px;
    & ${GalleryInfo} {
      opacity: 1;
      left: 20%;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
`;
