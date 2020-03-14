import { InMemoryCache } from 'apollo-cache-inmemory';

export default function() {
    return {
        httpEndpoint: process.env.API_URL,
        cache: new InMemoryCache(),
    };
}
