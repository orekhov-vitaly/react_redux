import styled from "@emotion/styled"

export const FeedbackWrapper = styled.div`
  width: 100%;
  padding: 40px;
`
export const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 40px;

  & .button {
    width: auto;
    padding: 10px;
    background: #fff;
    border: 2px solid #000;
    border-radius: 0 100px 100px 0;
    font-size: 20px;
    line-height: 1;
    transition: background 0.2s;

    & .button:hover {
      background: #cacaca;
    }
  }
`
export const DislikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 40px;

  & .button {
    width: auto;
    padding: 10px;
    background: #fff;
    border: 2px solid #000;
    border-radius: 100px 0 0 100px;
    font-size: 20px;
    line-height: 1;
    transition: background 0.2s;

    & .button:hover {
      background: #cacaca;
    }
  }
`
export const LikeCounter = styled.div`
  width: auto;
  min-width: 48px;
  padding: 10px;
  background: #fff;
  border: 2px solid #000;
  border-right: none;
  border-radius: 100px 0 0 100px;
  font-size: 20px;
  line-height: 1;
  text-align: center;
`
export const DislikeCounter = styled.div`
  width: auto;
  min-width: 48px;
  padding: 10px;
  background: #fff;
  border: 2px solid #000;
  border-left: none;
  border-radius: 0 100px 100px 0;
  font-size: 20px;
  line-height: 1;
  text-align: center;
`
