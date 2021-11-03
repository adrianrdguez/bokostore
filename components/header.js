import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import { UilShoppingCart } from '@iconscout/react-unicons'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Header({ cart, clearCart }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { if (cart.length > 0) { setOpen(true) } }
    const handleClose = () => setOpen(false);

    return (
        <>
            <header className='flex flex-row h-20 w-full'>
                <div className='flex ml-8 mt-3 visible sm:invisible'>
                    BEJAMAS_
                </div>
                <div className=' flex m-auto mr-8 mt-3'>
                    <Button onClick={handleOpen}>{cart.length}</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            {cart.map((product) => {
                                return <div className="flex flex-row my-5">
                                    <div className="flex flex-col w-1/2">
                                        <div>
                                            {product.name}
                                        </div>
                                        <div className="text-primary">
                                            $ {product.price}
                                        </div>
                                    </div>
                                    <div className="bg-cover relative w-1/2" style={{ width: "149px", height: "86px", backgroundImage: `url(${product.src})`, backgroundSize: '149px 86px', backgroundRepeat: 'no-repeat' }}></div>
                                </div>
                            })}
                            <Divider />
                            <div className="flex justify-center border-4 border-black">
                                <button onClick={clearCart}>CLEAR</button>
                            </div>
                        </Box>
                    </Modal>
                    <UilShoppingCart size={48} />
                </div>
            </header>
        </>
    )
}