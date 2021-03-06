import { Action, extender, Guild } from '@klasa/core';

import type { GuildCreateDispatch } from '@klasa/ws';

export default class CoreAction extends Action {

	public check(): null {
		return null;
	}

	public build(data: GuildCreateDispatch): Guild {
		// eslint-disable-next-line @typescript-eslint/camelcase
		return new (extender.get('Guild'))(this.client, data.d, data.shard_id);
	}

	public cache(data: Guild): void {
		if (this.client.options.cache.enabled) {
			this.client.guilds.set(data.id, data);
		}
	}

}
