import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { selector as groupContactsSelectors } from 'src/store/groupContacts'

export const GroupListPage = memo(() => {
    const groupContacts = useSelector(groupContactsSelectors.get())
    return (
        <Row xxl={4}>
            {groupContacts.map(gc => (
                <Col key={gc.id}>
                    <GroupContactsCard groupContacts={gc} withLink/>
                </Col>
            ))}
        </Row>
    )
})
