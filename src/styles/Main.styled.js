import styled from "styled-components";

export const Title = styled.h1`
  color: #EBEBEB;
  font-weight: bolder;
  font-size: 1.2rem;
@media screen and (min-width: 700px) {
  width: 65%;
  text-align: center;
}
`

// export const Title = styled.div`
//   color: #EBEBEB;
//   /* font-size: 1.2rem; */
//   h1, h2{
//     font-weight: 700;
//     font-size: medium;

//   }
// @media screen and (min-width: 700px) {
//   width: 70%;
//   text-align: center;
// }

export const MainStyle = styled.main`
  margin: 1rem;
  display: flex;
  justify-content: space-evenly;
  gap: -4rem;
    img{
      width:70%;
    }
`

export const ContainerForm  = styled.div`
  border-radius: 8px;
  background-color: #00BAFF;
  width: 50%;
  margin: auto 0;
  /* height: auto; */
  padding: .5rem;
  
`
export const FormStyle = styled.form`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: left;
    P{
      margin: 2px;
    }
    label, button{
      margin: 5px auto;
    }
    input{
      text-align: center;
      width: 90%;
      border-radius: 2px;

    };
`
