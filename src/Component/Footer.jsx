'use client'

import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden} from '@chakra-ui/react'
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub  } from 'react-icons/ai'



export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2023 Vampire. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                   <a href=""  ><AiFillTwitterCircle size={"30px"}/></a>
                   <a href=""><AiFillInstagram size={"30px"}/></a>
                   <a href=""><AiFillGithub size={"30px"}/></a>
                </Stack>
            </Container>
        </Box>
    )
}