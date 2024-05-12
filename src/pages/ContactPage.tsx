import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
// import { useGetContactQuery } from 'src/store/contact'
import store, { StoreList } from 'src/store'
import { observer } from 'mobx-react-lite'

export const ContactPage = observer(() => {

    const {contactId} = useParams<{ contactId: string }>()

    const {data: contacts, isLoading} = store[StoreList.contacts]

    const contact = contacts && contacts.find(contact => contact.id === contactId)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <Row xxl={3}>
            <Col className={'mx-auto'}>
                {contact ? <ContactCard contact={contact} /> : <Empty/>}
            </Col>
        </Row>
    )
})
