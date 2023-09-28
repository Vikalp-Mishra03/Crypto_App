import { Spinner, VStack, Box } from '@chakra-ui/react'
import React from 'react'

export default function Loader() {
  return (
    <VStack h={'90vh'} justifyContent={'center'}>
      <Box transform={'scale(3)'}>
        <Spinner size={'xl'} />
      </Box>
    </VStack>
  )
}
