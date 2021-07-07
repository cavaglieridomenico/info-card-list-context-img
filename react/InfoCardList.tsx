import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { InfoCard } from 'vtex.store-components'
import { defineMessages } from 'react-intl'

const messages = defineMessages({
  title: {
    id: 'admin/editor.info-card-list.title',
  },
  description: {
    id: 'admin/editor.info-card-list.description',
  }
})

export type InfoCardsSchema = Array<{
  [key: string]: any;
}>

export interface InfoCardListProps {
  infoCards: InfoCardsSchema
}

function InfoCardList({
  infoCards,
  children,
}: PropsWithChildren<InfoCardListProps>) {
  const { list } = useListContext() || []

  const imageListContent = infoCards.map(
    ({ ...properties }, idx) => (
      <InfoCard
        key={idx}
        {...properties}
      />
    )
  )

  const newListContextValue = list.concat(imageListContent)

  return (
    <ListContextProvider list={newListContextValue}>
      {children}
    </ListContextProvider>
  )
}

InfoCardList.schema = {
  title: messages.title.id,
  description: messages.description.id,
  type: 'object',
}

export default InfoCardList
