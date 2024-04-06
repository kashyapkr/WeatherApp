import styled from "styled-components";


type MainWrapperProps = {
  weather?: string | undefined;
};

const MainWrapper = styled.div<MainWrapperProps>`
height: 100vh;
display: flex;
justify-content: center;
width: 100vw;
  
  .container {
    background-color:rgb(128, 120, 120)
    border-radius: 12px; 
    padding: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); 
    box-sizing: border-box;
    color: white;
    background-blend-mode: overlay;
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    
  }

  .searchArea {
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: none;
    color: white;
    font-size:15px;
    border: 1px solid grey;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: transparent;
  }

  .searchCirlce {
    width: 50px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > .searchIcon {
      font-size: 26px;
      color: white;
    }
  }

  .weartherArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;

    > .icon {
      font-size: 9rem;
    }

    > h1 {
      font-size: 3rem;
      font-family: "Bebas Neue", sans-serif;
    }

    span {
      margin-bottom: 10px;
      font-family: "Inter", sans-serif;
    }

    h2 {
      font-size: 2rem;
      font-family: "Inter", sans-serif;
      font-weight: 400;
    }
  }

  .bottomInfoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif;
    margin: 10px;
    border-radius: 12px;
    padding: 10px;
  }

  .humidityLevel,
  .windLevel {
    display: flex;
    align-items: center;
    margin: 0 20px;

    > .humidIcon {
      font-size: 3rem;
    }
  }

  .windIcon {
    font-size: 2rem;
    margin-right: 10px;
  }

  .loading {
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .loadingIcon {
      font-size: 3rem;
      animation: spin 2s linear infinite;
    }

    p {
      font-size: 22px;
      margin-top: 10px;
      font-family: "Josefin Sans", sans-serif;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;




export { MainWrapper };   export type { MainWrapperProps };

