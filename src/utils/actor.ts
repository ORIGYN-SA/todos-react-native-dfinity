import {Actor, HttpAgent, Identity} from '@dfinity/agent';
import {SIMPLE_TODO_DID} from '../../dfinity/simpleTodo/did';
import SIMPLE_TODO_TYPES from '../../dfinity/simpleTodo/types';
import {Platform} from 'react-native';

export const getSimpleDoToActor = async (identity?: Identity) => {
  const host = Platform.select({
    ios: 'https://142c1a9fdd27.ngrok.io/',
    android: 'https://142c1a9fdd27.ngrok.io/',
  });

  const agent = new HttpAgent({
    identity,
    host,
  });

  await agent.fetchRootKey();

  return Actor.createActor<SIMPLE_TODO_TYPES>(SIMPLE_TODO_DID, {
    agent,
    canisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
  });
};
