// Шаг 1. - Импортируем функцию, с помощью которой создаем slice
import { createAppSlice } from "store/createAppSlice"
import { CounterStateSlice } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const counterInitialState: CounterStateSlice = {
  count: 0,
}

// Шаг 2. - Создаем слайс для каунтера с помощью вызова функции createAppSlice, в которую передаем объект настройки
export const counterSlice = createAppSlice({
  // Шаг 3.- Создаем имя, под которым будет храниться объект со значением каунтера (state)
  // Стейт для отдельных частей данных всегда представляет объект!
  name: "COUNTER",
  // Шаг 4. - Задаем объект, в котором будет храниться начальное состояние
  initialState: counterInitialState,
  // Шаг 5. - Создаем объект, в котором будут храниться редьюсеры (функции, которые отвечают за изменение состояния)
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice, action: PayloadAction<number>) => {
      state.count = state.count + action.payload
    }),
    minus: create.reducer((state: CounterStateSlice, action: PayloadAction<number>) => {
      state.count = state.count - action.payload
    }),
  }),
  // Шаг 6. - Создаем селекторы, которые позволяют забрать данные мз стейта в компонент
  selectors: {
    counterValue: (state: CounterStateSlice) => state.count,
  },
})

// Шаг 7. - Экспорт экшенов и селекторов для удобства их использования в компоненте
export const counterActions = counterSlice.actions;
export const counterSelectors = counterSlice.selectors;
