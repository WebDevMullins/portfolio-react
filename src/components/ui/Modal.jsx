import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import PropTypes from 'prop-types'

const FormModal = ({ isOpen, onClose, data }) => {
	FormModal.propTypes = {
		isOpen: PropTypes.bool.isRequired,
		onClose: PropTypes.func.isRequired,
		data: PropTypes.object
	}

	return (
		<>
			<Modal
				backdrop='blur'
				isOpen={isOpen}
				onClose={onClose}
				radius='lg'
				classNames={{
					base: 'border-neutral-700 bg-neutral-950 text-neutral-300',
					header: 'border-b-1 border-neutral-800',
					footer: 'border-t-1 border-neutral-800',
					closeButton: 'hover:bg-white/5 active:bg-white/10'
				}}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Success!</ModalHeader>
							<ModalBody>
								<p>Thank you, {data && data.name}!</p>
								<p>The following information has been sent.</p>
								<p>
									Email - <br /> {data && data.email}
								</p>
								<p>
									Message - <br /> {data && data.message}
								</p>
							</ModalBody>
							<ModalFooter>
								<Button className='bg-red-700' onPress={onClose}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default FormModal
