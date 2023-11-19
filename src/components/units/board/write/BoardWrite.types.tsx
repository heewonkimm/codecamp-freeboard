import { ChangeEvent } from "react"
import { IQuery } from "../../../../commons/types/generated/types"


export interface IBoardWriteProps {
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface IBoardWriteUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void 
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void 
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void 
    onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void 
    writerError: string
    passwordError: string
    titleError: string
    contentsError: string
    onClick: () => void 
    onClickUpdate: () => void 
    isActive: boolean
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface ISubmitButtonProps {
    isActive: boolean
}