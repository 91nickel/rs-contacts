import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"

import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'

import { selector as contactsSelectors } from 'src/store/contacts'
import { selector as groupContactsSelectors } from 'src/store/groupContacts'

import { GroupContactsDto } from "src/types/dto/GroupContactsDto"

export const GroupPage = memo(() => {
    const {groupId} = useParams<{ groupId: string }>()

    const groupContacts = useSelector(groupContactsSelectors.byId(groupId as GroupContactsDto['id']))!
    const contacts = useSelector(contactsSelectors.byGroup(groupContacts['contactIds']))

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
