/*
 * Copyright 2020 Google LLC
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
import { __ } from '@googleforcreators/i18n';

/**
 * Internal dependencies
 */
import type { Element } from '../types';
import getDefinitionForType from './getDefinitionForType';
import elementIs from './elementIs';

/**
 * Returns the layer name based on the element properties.
 *
 * @param element Element.
 * @return Layer name.
 */
function getLayerName(element: Element) {
  if (element.layerName) {
    return element.layerName;
  }

  if (elementIs.backgroundable(element) && element.isBackground) {
    return __('Background', 'web-stories');
  }

  return getDefinitionForType(element.type)?.getLayerText(element);
}

export default getLayerName;
