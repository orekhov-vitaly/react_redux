import { createAppSlice } from "store/createAppSlice"
import { FeedbackInitialState } from "./types"
import Feedback from "components/Feedback/Feedback"

const feedbackInitialState: FeedbackInitialState = {
  likeCount: 0,
  dislikeCount: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackInitialState) => {
      state.likeCount = state.likeCount + 1
    }),
    addDislike: create.reducer((state: FeedbackInitialState) => {
      state.dislikeCount = state.dislikeCount + 1
    }),
    resetResults: create.reducer(() => feedbackInitialState),
  }),
  selectors: {
    feedbackData: (state: FeedbackInitialState) => state,
  },
})

export const feedbackActions = feedbackSlice.actions;
export const feedbackSelectors = feedbackSlice.selectors;