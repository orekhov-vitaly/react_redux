import { useState } from "react"

import Button from "../Button/Button"
import {
  DislikeContainer,
  DislikeCounter,
  FeedbackWrapper,
  LikeContainer,
  LikeCounter,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackActions,
  feedbackSelectors,
} from "store/redux/feedback/feedbackSlice"

function Feedback() {
  const { likeCount, dislikeCount } = useAppSelector(
    feedbackSelectors.feedbackData,
  )
  const dispatch = useAppDispatch()
  const addLike = () => {
    dispatch(feedbackActions.addLike())
  }
  const addDislike = () => {
    dispatch(feedbackActions.addDislike())
  }
  const resetResults = () => {
    dispatch(feedbackActions.resetResults())
  }
  return (
    <FeedbackWrapper>
      <LikeContainer>
        <LikeCounter>{likeCount}</LikeCounter>
        <Button name="👍" onClick={addLike} />
      </LikeContainer>
      <DislikeContainer>
        <Button name="👎" onClick={addDislike} />
        <DislikeCounter>{dislikeCount}</DislikeCounter>
      </DislikeContainer>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
