import { RequestParameters } from 'relay-runtime/lib/util/RelayConcreteNode';
import { Variables } from 'relay-runtime/lib/util/RelayRuntimeTypes';

import { SPACE_X } from '../../shared/constants/services';

export const fetchGraphQL = async (
  request: RequestParameters,
  variables: Variables
) => {
  const response = await fetch(SPACE_X.API_URL as string, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return await response.json();
};
