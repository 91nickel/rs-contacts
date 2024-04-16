import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/store/hooks'

export const FavouriteListPage = memo(() => {

    const contactsList = useAppSelector((state) => state.contacts)
    const favouriteContactsList = useAppSelector((state) => state.favouriteContacts)
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
