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

/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';

/**
 * Internal dependencies
 */
import StoriesLoading from '../components/storiesLoading';

describe('StoriesLoading', () => {
  it('should display spinner', () => {
    render(<StoriesLoading />);
    // Text occurs twice, once within the placeholder and once in the a11y-speak-region.
    expect(screen.getAllByText('Loading Stories…')[0]).toBeInTheDocument();
  });
});
