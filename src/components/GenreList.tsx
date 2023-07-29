import {
  Button,
  HStack,
  Heading,
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
  selectedGenre: Genre | null
}

const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres()

  if (error) {
    return null
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Heading as='h1' fontSize='2xl' marginBottom={3}> Genres </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize={'32px'}
                borderRadius={8}
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
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
    </>
  )
}

export default GenreList
