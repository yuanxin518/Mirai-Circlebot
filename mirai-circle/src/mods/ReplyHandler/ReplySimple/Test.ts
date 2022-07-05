import { MessageType } from 'mirai-ts'
import { ReplyModType } from '../../../types/ModType'

export const Test = (): ReplyModType => {
	const name = '测试'
	const isAlwaysReply: boolean = false
	const keywords: string[] = []
	const keywordRule: RegExp[] = []
	const whiteList: number[] = []

	const reply = (msg: MessageType.MessageChain | string) => {
		return '现在时间：' + new Date().toLocaleString()
	}
	return {
		name,
		keywords,
		whiteList,
		replyHandler: true,
		reply,
		isAlwaysReply,
		keywordRule,
	}
}