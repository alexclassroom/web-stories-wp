/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export enum Direction {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export type CornerDirection = keyof typeof CORNER_DIRECTIONS;

export const CORNER_DIRECTIONS = {
  [`${Direction.Top}_${Direction.Left}`]: `${Direction.Top}_${Direction.Left}`,
  [`${Direction.Top}_${Direction.Right}`]: `${Direction.Top}_${Direction.Right}`,
  [`${Direction.Bottom}_${Direction.Right}`]: `${Direction.Bottom}_${Direction.Right}`,
  [`${Direction.Bottom}_${Direction.Left}`]: `${Direction.Bottom}_${Direction.Left}`,
};
