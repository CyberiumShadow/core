import { ChannelType } from '@klasa/dapi-types';
import { GuildTextChannel } from './GuildTextChannel';

import type { ChannelModifyOptions } from './GuildChannel';
import type { RequestOptions } from '@klasa/rest';

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object
 */
export class NewsChannel extends GuildTextChannel {

	/**
	 * The type of channel.
	 * @since 0.0.1
	 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
	 */
	public readonly type = ChannelType.GuildAnnouncement;

	/**
	 * Modifies this channel.
	 * @param data The channel modify options.
	 * @param requestOptions The request options.
	 * @since 0.0.1
	 */
	public modify(options: NewsChannelModifyOptions, requestOptions: RequestOptions = {}): Promise<this> {
		return super.modify(options, requestOptions);
	}

}

export interface NewsChannelModifyOptions extends ChannelModifyOptions {
	type?: ChannelType.GuildAnnouncement | ChannelType.GuildText;
	topic?: string | null;
	nsfw?: boolean;
	parent_id?: string | null;
}
