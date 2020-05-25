"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../../../lib/pieces/Action");
const Extender_1 = require("../../../lib/util/Extender");
class CoreAction extends Action_1.Action {
    check() {
        return null;
    }
    build(data) {
        const guild = this.client.guilds.get(data.d.guild_id);
        return guild ? new (Extender_1.extender.get('Ban'))(this.client, data.d, guild) : null;
    }
    cache(data) {
        data.guild.bans.delete(data.id);
    }
}
exports.default = CoreAction;
//# sourceMappingURL=GUILD_BAN_REMOVE.js.map