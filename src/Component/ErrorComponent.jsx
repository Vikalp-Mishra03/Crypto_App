import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

export default function ErrorComponent({ message }) {
  return (
    <Alert status={'error'} position={'fixed'} bottom={'4'} left={'50%'} transform={'translateX(-50%)'} w={'container.lg'}>
      <AlertIcon w={'100%'}>Error while fetching coins</AlertIcon>
    </Alert>
  )
}
