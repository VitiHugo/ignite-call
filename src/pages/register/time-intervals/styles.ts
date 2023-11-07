import { Box, styled } from "@ignite-ui/react";

export const IntervalsBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column'
})

export const IntervalsContainer = styled(Box, {
  border: '1px solid $gray600',
  borderRadius: '$md',
  marginBottom: '$4'
})

export const IntervalsItem = styled('div', {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'space-between',
  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600'
  }
})

export const IntervalsDay = styled('div', {
  display: 'flex',
  alignItem: 'center',
  gap: '$3'
})

export const IntervalsInputs = styled('div', {
  display: 'flex',
  alignItem: 'center',
  gap: '$2'
})