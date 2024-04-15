import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ContactCard } from 'src/components/ContactCard'

import { selector as contactsSelectors } from 'src/store/contacts'
import { selector as favouriteContactsSelectors } from 'src/store/favouriteContacts'

export const FavouriteListPage = memo(() => {

    const contactsList = useSelector(contactsSelectors.get())
    const favouriteContactsList = useSelector(favouriteContactsSelectors.get())
    const contacts = contactsList.filter(({id}) => favouriteContactsList.includes(id))

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
