import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

const GenreList = () => {
  const { data, error, isLoading } = useGenres()

  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY={'5px'}>
          <HStack>
            <Image
              src={getCroppedImageUrl(data.image_background)}
              alt={data.name}
              boxSize={'32px'}
              borderRadius={8}
            />
            <Text fontSize={'lg'}>{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
