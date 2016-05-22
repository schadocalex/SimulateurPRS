
import El from "./El";
/**
 *
 */
abstract class Gate extends El {
    ports: Object;

    /**
     * Add a link between two Gate objects at the given ports.
     */
    static addLink(from: Gate, fromPort: string, to: Gate, toPort: string) {
        from.ports[fromPort] = to;
        to.ports[toPort] = from;
    }
}
export default Gate;