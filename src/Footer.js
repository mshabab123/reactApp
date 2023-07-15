const Footer = () => {

    const today = new Date();
    return (
        <footer style={{
            backgroundColor: 'red',
            color: '#fff'
        }}
        >Copyright &copy; {today.getFullYear()}</footer>
    )
}

export default Footer