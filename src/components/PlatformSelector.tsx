import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
import { useState } from 'react'

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform | null) => void
}

const PlatformSelector = ({ onSelectPlatform }: PlatformSelectorProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  )

  const { data, error } = usePlatforms()

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
        {selectedPlatform?.name ?? 'Platforms'}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            onSelectPlatform(null)
            setSelectedPlatform(null)
          }}
        >
          All Platforms
        </MenuItem>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              onSelectPlatform(platform)
              setSelectedPlatform(platform)
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
