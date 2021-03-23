import * as React from "react";

interface IComponent_Canvas_Props {
    width: number;
    height: number;
    pixels: Uint8ClampedArray;
}

export class Component_Canvas extends React.Component<IComponent_Canvas_Props> {
    public ctx: CanvasRenderingContext2D | undefined;

    public render() {
        return <div>Hello</div>
    }
}