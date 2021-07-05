import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { LoggerService } from 'src/logger/logger.service';

export default function formatGraphqlError(
  error: GraphQLError,
): GraphQLFormattedError {
  const logger = LoggerService.getInstance('FormatGraphqlError');
  logger.error(error);

  const graphQLFormattedError: GraphQLFormattedError = {
    message: error.extensions?.exception?.response?.message || error.message,
    path: error.path,
    extensions: {
      statusCode:
        error.extensions?.exception?.response?.statusCode ||
        error.extensions?.status,
      error: error.extensions?.code,
    },
  };
  return graphQLFormattedError;
}
