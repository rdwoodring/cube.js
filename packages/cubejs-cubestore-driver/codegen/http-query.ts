// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { HttpTable } from './http-table.js';


export class HttpQuery {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):HttpQuery {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsHttpQuery(bb:flatbuffers.ByteBuffer, obj?:HttpQuery):HttpQuery {
  return (obj || new HttpQuery()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsHttpQuery(bb:flatbuffers.ByteBuffer, obj?:HttpQuery):HttpQuery {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new HttpQuery()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

query():string|null
query(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
query(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

traceObj():string|null
traceObj(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
traceObj(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

inlineTables(index: number, obj?:HttpTable):HttpTable|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new HttpTable()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

inlineTablesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startHttpQuery(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addQuery(builder:flatbuffers.Builder, queryOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, queryOffset, 0);
}

static addTraceObj(builder:flatbuffers.Builder, traceObjOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, traceObjOffset, 0);
}

static addInlineTables(builder:flatbuffers.Builder, inlineTablesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, inlineTablesOffset, 0);
}

static createInlineTablesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startInlineTablesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endHttpQuery(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createHttpQuery(builder:flatbuffers.Builder, queryOffset:flatbuffers.Offset, traceObjOffset:flatbuffers.Offset, inlineTablesOffset:flatbuffers.Offset):flatbuffers.Offset {
  HttpQuery.startHttpQuery(builder);
  HttpQuery.addQuery(builder, queryOffset);
  HttpQuery.addTraceObj(builder, traceObjOffset);
  HttpQuery.addInlineTables(builder, inlineTablesOffset);
  return HttpQuery.endHttpQuery(builder);
}
}