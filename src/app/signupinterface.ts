export interface Signupinterface {
    name:string,
    email:string,
    password:string
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
}
export interface InsertedSuccess {
    lastRowId: string;
    rowsAffected: Number;
    Message:String;
}
// export interface Read {
//     Result: [];
// }