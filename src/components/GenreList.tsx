import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  onSelect: (genre: Genre) => void
}

const GenreList = ({ onSelect }: Props) => {
  const { data, error, isLoading } = useGenres()

  if (error) {
    return null
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              boxSize={'32px'}
              borderRadius={8}
            />
            <Button
              fontSize={'lg'}
              variant={'link'}
              onClick={() => onSelect(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
