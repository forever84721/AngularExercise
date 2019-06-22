export class Area {
    public ShopId: string;
    public AreaId: string;
    public AreaName: string;
    public Seq: number;
}
export class Table {
    public ShopId: string;
    public TableId: string;
    public TableName: string;
    public AreaId: string;
    public X: number;
    public Y: number;
    public Width: number;
    public Height: number;
    public Shape: number;
}
export class FunctionButton {
    public FunctionGroupId: number;
    public FunctionButtonId: string;
    public DisplayText: string;
    public FontColor: string;
    public BackgroundColor: number;
    public BorderColor: number;
    public Seq: number;
    public Visible: number;
}
