import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/store/hooks'

export const GroupPage = memo(() => {
    const {groupId} = useParams<{ groupId: string }>()

    const groupContacts = useAppSelector(state => state.groupContacts.find(({id}) => id === groupId))!
    const contacts = useAppSelector(state => state.contacts.filter(c => groupContacts.contactIds.includes(c.id)))

    return (
        <Row className="g-4">
            {groupContacts ? (
                <>
                    <Col xxl={12}>
                        <Row xxl={3}>
                            <Col className="mx-auto">
                                <GroupContactsCard groupContacts={groupContacts}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row xxl={4} className="g-4">
                            {contacts.map((contact) => (
                                <Col key={contact.id}>
                                    <ContactCard contact={contact} withLink/>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </>
            ) : <Empty/>}
        </Row>
    )
})
