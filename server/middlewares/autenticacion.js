const jwt = require('jsonwebtoken');


// =========================
// Verificar Token
// =========================


let verificaToken = (req, res, netx) => {

    let token = req.get('token'); //Autorization

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }
        req.usuario = decoded.usuario;
        netx();
    })

};

// =========================
// Verifica Admin-Role
// =========================

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;
    console.log(usuario)

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {

        res.json({
            ok: false,
            err: {
                message: "El susuario no es administrador"
            }
        })
    }

}

module.exports = {
    verificaToken,
    verificaAdmin_Role
}