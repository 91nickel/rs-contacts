import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ContactCard } from 'src/components/ContactCard'

import { Selector, ReducersList } from 'src/store'
import { useGetContactQuery } from 'src/store/contact'

export const FavouriteListPage = memo(() => {

    const {data: contactsList} = useGetContactQuery()
    const favouriteContactsList = useSelector(Selector[ReducersList.favouriteContacts].get())

    if (!contactsList) {
        return <h2>Loading...</h2>
    }

    const contacts = contactsList && contactsList.filter(({id}) => favouriteContactsList.includes(id))

    return (
        <Row xxl={4} className="g-4">
            {contacts.map((contact) => (
                <Col key={contact.id}>
                    <ContactCard contact={contact} withLink/>
                </Col>
            ))}
        </Row>
    )
})
