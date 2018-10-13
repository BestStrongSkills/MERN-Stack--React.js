const style = {
    commentBox: {
        width: '80 vw',
        margin: '0 auto',
        fontFamily: 'Helvetica,sans-serif'
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    commentList: {
        border: '1 px solid# f1f1f1 ',
        padding: '0 12 px',
        maxHeight: '70 vh',
        overflow: 'scroll'
    },
    comment: {
        backgroundColor: '#fafafa',
        margin: '10 px',
        padding: '3 px 10 px',
        fontSize: '.85 rem'
    },
    commentForm: {
        margin: '10 px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space - between'
    },
    commentFormAuthor: {
        minWidth: '150 px',
        margin: '3 px',
        padding: '0 10 px',
        borderRadius: '3 px',
        height: '40 px',
        flex: '2 '
    },
    commentFormText: {
        flex: '4 ',
        minWidth: '400 px',
        margin: '3 px',
        padding: '0 10 px',
        height: '40 px',
        borderRadius: '3 px'
    },
    commentFormPost: {
        minWidth: '75 px',
        flex: '1 ',
        height: '40 px',
        margin: '5 px 3 px',
        fontSize: '1 rem',
        backgroundColor: '#A3CDFD',
        borderRadius: '3 px',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '.055 rem',
        border: 'none'
    },
    updateLink: {
        textDecoration: 'none',
        paddingRight: '15 px',
        fontSize: '.7 rem'
    },
    deleteLink: {
        textDecoration: 'none',
        paddingRight: '15 px',
        fontSize: '.7 rem',
        color: 'red'
    }
}
module.exports = style;