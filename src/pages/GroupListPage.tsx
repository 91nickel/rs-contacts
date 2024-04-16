import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useAppSelector } from 'src/store/hooks'

export const GroupListPage = memo(() => {
    const groupContacts = useAppSelector((state) => state.groupContacts)
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
