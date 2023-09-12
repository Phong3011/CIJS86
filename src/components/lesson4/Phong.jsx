import { Button, Modal } from 'antd';
import {React, useState} from 'react'
import Content from './Content';

const Admin = () => {
	const [modal, setModal] = useState(false)

	const openModal = () => {
		setModal(true)
	}
 

	return(
		<div>
			<Button onClick={openModal}>Click me</Button>
			<Modal open={modal} footer={null}>
				<Content />	
			</Modal>
		</div>
	)
}

export default Admin;