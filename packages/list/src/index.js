import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@oneloop/box'
import { Input } from '@oneloop/input'
import { Checkbox } from '@oneloop/checkbox'
import { Text } from '@oneloop/text'

export const List = ({
  data,
  isSelecteable,
  isMultiSelecteable,
  isSearchable,
  selectedData,
  onChangeSelected,
  notFoundMessage,
  ...props
}) => {
  const [filteredData, setFilteredData] = useState(data)
  const [selected, setSelected] = useState(selectedData)

  const filterByInput = e => {
    var string = e.target.value
    var stringLowerCase = string.toLowerCase()

    const handleFilter = data.filter(data => {
      var dataLowerCase = Object.values(data.content)
        .toString()
        .toLowerCase()
      if (dataLowerCase.includes(stringLowerCase)) {
        return data
      }
    })
    setFilteredData(handleFilter)
  }

  const checkedItems = (e, user) => {
    let selItems = []

    if (e.target.checked) {
      selItems = [...selected, user]
    } else {
      selItems = selected.filter(el => el.id !== user.id)
    }

    setSelected(selItems)
    onChangeSelected(selItems)
  }

  const Li = props => (
    <Box
      as="li"
      {...props}
      sx={{ py: '10px', px: '16px', ':hover': { bg: 'neutral.1' } }}
    />
  )

  return (
    <Box as="ul" {...props} sx={{ listStyleType: 'none', p: 0 }}>
      {isSearchable && (
        <Flex as="span" sx={{ px: '16px', py: '14px' }}>
          <Input
            width={1}
            onChange={e => filterByInput(e)}
            sx={{ borderRadius: 'circle', bg: 'rgba(0, 0, 0, 0.04)' }}
          />
        </Flex>
      )}
      {filteredData.length > 0 ? (
        filteredData.map(user => {
          return isMultiSelecteable ? (
            <Li
              key={user.id}
              width={1}
              display="inline-flex"
              justifyContent="space-between"
            >
              <Checkbox
                checked={selected.some(sel => sel.id === user.id)}
                onChange={e => checkedItems(e, user)}
                id={user.id}
              />
              {Object.values(user.content).map((data, i) => (
                <Text
                  key={i}
                  isTruncated={i === 0 || false}
                  flexGrow={i > 0 ? 0 : 1}
                  sx={{ ml: '16px' }}
                >
                  {data}
                </Text>
              ))}
            </Li>
          ) : isSelecteable ? (
            <Li
              key={user.id}
              onClick={() => onChangeSelected(user)}
              width={1}
              display="inline-flex"
              justifyContent="space-between"
              __css={{ cursor: 'pointer' }}
            >
              {Object.values(user.content).map((data, i) => (
                <Text key={i}>{data}</Text>
              ))}
            </Li>
          ) : (
            <Li
              key={user.id}
              width={1}
              display="inline-flex"
              justifyContent="space-between"
            >
              {Object.values(user.content).map((data, i) => (
                <Text key={i}>{data}</Text>
              ))}
            </Li>
          )
        })
      ) : (
        <Li>
          <Text>{notFoundMessage || 'Not found'}</Text>
        </Li>
      )}
    </Box>
  )
}

List.propTypes = {
  data: PropTypes.array,
  isSelecteable: PropTypes.bool,
  isMultiSelecteable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  selectedData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChangeSelected: PropTypes.func,
  notFoundMessage: PropTypes.string,
}

List.defaultProps = {
  isSelecteable: false,
  isMultiSelecteable: false,
  isSearchable: false,
  selectedData: [],
  data: [],
}
