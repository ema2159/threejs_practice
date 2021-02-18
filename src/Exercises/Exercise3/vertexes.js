const vertexes = [
  // front
  // 1
  { pos: [-1,   -1,  1], norm: [0,  0,  1], uv: [0,    0], }, // 0
  { pos: [-0.5, -1,  1], norm: [0,  0,  1], uv: [0.25, 0], }, // 1
  { pos: [-1,    1,  1], norm: [0,  0,  1], uv: [0,    1], }, // 2
  { pos: [-0.5,  1,  1], norm: [0,  0,  1], uv: [0.25, 1], }, // 3
  // 2
  { pos: [0.5, -1,  1], norm: [0,  0,  1], uv: [0.75, 0], }, // 4
  { pos: [1,   -1,  1], norm: [0,  0,  1], uv: [1,    0], }, // 5
  { pos: [0.5,  1,  1], norm: [0,  0,  1], uv: [0.75, 1], }, // 6
  { pos: [1,    1,  1], norm: [0,  0,  1], uv: [1,    1], }, // 7
  // 3
  { pos: [-0.5, -1,    1], norm: [0,  0,  1], uv: [0.25, 0], }, // 8
  { pos: [0.5,  -1,    1], norm: [0,  0,  1], uv: [0.75, 0], }, // 9
  { pos: [-0.5, -0.5,  1], norm: [0,  0,  1], uv: [0.25, 0.25], }, // 10
  { pos: [0.5,  -0.5,  1], norm: [0,  0,  1], uv: [0.75, 0.25], }, // 11
  // 4
  { pos: [-0.5, 0.5,  1], norm: [0,  0,  1], uv: [0.25, 0.75], }, // 12
  { pos: [0.5,  0.5,  1], norm: [0,  0,  1], uv: [0.75, 0.75], }, // 13
  { pos: [-0.5, 1,    1], norm: [0,  0,  1], uv: [0.25, 1], }, // 14
  { pos: [0.5,  1,    1], norm: [0,  0,  1], uv: [0.75, 1], }, // 15
  // 5
  { pos: [-0.5, -0.5,  1],   norm: [0,   1,  0], uv: [0.25, 0.25], }, // 16
  { pos: [0.5,  -0.5,  1],   norm: [0,   1,  0], uv: [0.75, 0.25], }, // 17
  { pos: [-0.5, -0.5,  0.5], norm: [0,   1,  0], uv: [0.25, 0.5], }, // 18
  { pos: [0.5,  -0.5,  0.5], norm: [0,   1,  0], uv: [0.75, 0.5], }, // 19
  // 6
  { pos: [-0.5, 0.5,  0.5], norm: [0,  -1,  0], uv: [0.25, 0.5], }, // 20
  { pos: [0.5,  0.5,  0.5], norm: [0,  -1,  0], uv: [0.75, 0.5], }, // 21
  { pos: [-0.5, 0.5,  1],   norm: [0,  -1,  0], uv: [0.25, 0.75], }, // 22
  { pos: [0.5,  0.5,  1],   norm: [0,  -1,  0], uv: [0.75, 0.75], }, // 23
  // 7
  { pos: [0.5, -0.5,  1],   norm: [-1,   0,  0], uv: [0.75, 0.25], }, // 24
  { pos: [0.5,  0.5,  1],   norm: [-1,   0,  0], uv: [0.75, 0.75], }, // 25
  { pos: [0.5, -0.5,  0.5], norm: [-1,   0,  0], uv: [0.5,  0.25], }, // 26
  { pos: [0.5,  0.5,  0.5], norm: [-1,   0,  0], uv: [0.5,  0.75], }, // 27
  // 8
  { pos: [-0.5, -0.5,  0.5], norm: [1,  0,  0], uv: [0.5,  0.25], }, // 28
  { pos: [-0.5,  0.5,  0.5], norm: [1,  0,  0], uv: [0.5,  0.75], }, // 29
  { pos: [-0.5, -0.5,  1],   norm: [1,  0,  0], uv: [0.25, 0.25], }, // 30
  { pos: [-0.5,  0.5,  1],   norm: [1,  0,  0], uv: [0.25, 0.75], }, // 31
  // right
  // 1
  { pos: [1, -1,  1],   norm: [1,  0,  0], uv: [0,    0], }, // 32
  { pos: [1, -1,  0.5], norm: [1,  0,  0], uv: [0.25, 0], }, // 33
  { pos: [1,  1,  1],   norm: [1,  0,  0], uv: [0,    1], }, // 34
  { pos: [1,  1,  0.5], norm: [1,  0,  0], uv: [0.25, 1], }, // 35
  // 2
  { pos: [1, -1, -0.5], norm: [1,  0,  0], uv: [0.75, 0], }, // 36
  { pos: [1, -1, -1  ], norm: [1,  0,  0], uv: [1,    0], }, // 37
  { pos: [1,  1, -0.5], norm: [1,  0,  0], uv: [0.75, 1], }, // 38
  { pos: [1,  1, -1  ], norm: [1,  0,  0], uv: [1,    1], }, // 39
  // 3
  { pos: [1,  -1,    0.5], norm: [1,  0,  0], uv: [0.25, 0], }, // 40
  { pos: [1,  -1,   -0.5], norm: [1,  0,  0], uv: [0.75, 0], }, // 41
  { pos: [1,  -0.5,  0.5], norm: [1,  0,  0], uv: [0.25, 0.25], }, // 42
  { pos: [1,  -0.5, -0.5], norm: [1,  0,  0], uv: [0.75, 0.25], }, // 43
  // 4
  { pos: [1, 0.5,   0.5], norm: [1,  0,  0], uv: [0.25, 0.75], }, // 44
  { pos: [1, 0.5,  -0.5], norm: [1,  0,  0], uv: [0.75, 0.75], }, // 45
  { pos: [1, 1,     0.5], norm: [1,  0,  0], uv: [0.25, 1], }, // 46
  { pos: [1, 1,    -0.5], norm: [1,  0,  0], uv: [0.75, 1], }, // 47
  // 5
  { pos: [1,   -0.5,  0.5], norm: [0,  1,  0], uv: [0.25, 0.25], }, // 48
  { pos: [1,   -0.5, -0.5], norm: [0,  1,  0], uv: [0.75, 0.25], }, // 49
  { pos: [0.5, -0.5,  0.5], norm: [0,  1,  0], uv: [0.25, 0.5], }, // 50
  { pos: [0.5, -0.5, -0.5], norm: [0,  1,  0], uv: [0.75, 0.5], }, // 51
  // 6
  { pos: [0.5, 0.5,  0.5], norm: [0,  -1,  0], uv: [0.25, 0.5], }, // 52
  { pos: [0.5, 0.5, -0.5], norm: [0,  -1,  0], uv: [0.75, 0.5], }, // 53
  { pos: [1,   0.5,  0.5], norm: [0,  -1,  0], uv: [0.25, 0.75], }, // 54
  { pos: [1,   0.5, -0.5], norm: [0,  -1,  0], uv: [0.75, 0.75], }, // 55
  // 7
  { pos: [1,   -0.5, -0.5],  norm: [0,  0, -1], uv: [0.75, 0.25], }, // 56
  { pos: [1,    0.5, -0.5],  norm: [0,  0, -1], uv: [0.75, 0.75], }, // 57
  { pos: [0.5, -0.5, -0.5],  norm: [0,  0, -1], uv: [0.5,  0.25], }, // 58
  { pos: [0.5,  0.5, -0.5],  norm: [0,  0, -1], uv: [0.5,  0.75], }, // 59
  // 8
  { pos: [0.5, -0.5, 0.5], norm: [0,  0,  1], uv: [0.5,  0.25], }, // 60
  { pos: [0.5,  0.5, 0.5], norm: [0,  0,  1], uv: [0.5,  0.75], }, // 61
  { pos: [1,   -0.5, 0.5], norm: [0,  0,  1], uv: [0.25, 0.25], }, // 62
  { pos: [1,    0.5, 0.5], norm: [0,  0,  1], uv: [0.25, 0.75], }, // 63
  // back
  // 1
  { pos: [1,   -1, -1], norm: [0,  0,  -1], uv: [0,    0], }, // 64
  { pos: [0.5, -1, -1], norm: [0,  0,  -1], uv: [0.25, 0], }, // 65
  { pos: [1,    1, -1], norm: [0,  0,  -1], uv: [0,    1], }, // 66
  { pos: [0.5,  1, -1], norm: [0,  0,  -1], uv: [0.25, 1], }, // 67
  // 2
  { pos: [-0.5, -1, -1], norm: [0,  0,  -1], uv: [0.75, 0], }, // 68
  { pos: [-1,   -1, -1], norm: [0,  0,  -1], uv: [1,    0], }, // 69
  { pos: [-0.5,  1, -1], norm: [0,  0,  -1], uv: [0.75, 1], }, // 70
  { pos: [-1,    1, -1], norm: [0,  0,  -1], uv: [1,    1], }, // 71
  // 3
  { pos: [0.5, -1,     -1], norm: [0,  0,  -1], uv: [0.25, 0], }, // 72
  { pos: [-0.5,  -1,   -1], norm: [0,  0,  -1], uv: [0.75, 0], }, // 73
  { pos: [0.5, -0.5,   -1], norm: [0,  0,  -1], uv: [0.25, 0.25], }, // 74
  { pos: [-0.5,  -0.5, -1], norm: [0,  0,  -1], uv: [0.75, 0.25], }, // 75
  // 4
  { pos: [0.5,  0.5, -1], norm: [0,  0,  -1], uv: [0.25, 0.75], }, // 76
  { pos: [-0.5, 0.5, -1], norm: [0,  0,  -1], uv: [0.75, 0.75], }, // 77
  { pos: [0.5,  1,   -1], norm: [0,  0,  -1], uv: [0.25, 1], }, // 78
  { pos: [-0.5, 1,   -1], norm: [0,  0,  -1], uv: [0.75, 1], }, // 79
  // 5
  { pos: [0.5,  -0.5, -1],   norm: [0,  1,  0], uv: [0.25, 0.25], }, // 80
  { pos: [-0.5, -0.5, -1],   norm: [0,  1,  0], uv: [0.75, 0.25], }, // 81
  { pos: [0.5,  -0.5, -0.5], norm: [0,  1,  0], uv: [0.25, 0.5], }, // 82
  { pos: [-0.5, -0.5, -0.5], norm: [0,  1,  0], uv: [0.75, 0.5], }, // 83
  // 6
  { pos: [0.5,  0.5, -0.5], norm: [0,  -1,  0], uv: [0.25, 0.5], }, // 84
  { pos: [-0.5, 0.5, -0.5], norm: [0,  -1,  0], uv: [0.75, 0.5], }, // 85
  { pos: [0.5,  0.5, -1],   norm: [0,  -1,  0], uv: [0.25, 0.75], }, // 86
  { pos: [-0.5, 0.5, -1],   norm: [0,  -1,  0], uv: [0.75, 0.75], }, // 87
  // 7
  { pos: [-0.5, -0.5, -1],   norm: [1,   0,  0], uv: [0.75, 0.25], }, // 88
  { pos: [-0.5,  0.5, -1],   norm: [1,   0,  0], uv: [0.75, 0.75], }, // 89
  { pos: [-0.5, -0.5, -0.5], norm: [1,   0,  0], uv: [0.5,  0.25], }, // 90
  { pos: [-0.5,  0.5, -0.5], norm: [1,   0,  0], uv: [0.5,  0.75], }, // 91
  // 8
  { pos: [0.5, -0.5, -0.5], norm: [-1,  0,  0], uv: [0.5,  0.25], }, // 92
  { pos: [0.5,  0.5, -0.5], norm: [-1,  0,  0], uv: [0.5,  0.75], }, // 93
  { pos: [0.5, -0.5, -1],   norm: [-1,  0,  0], uv: [0.25, 0.25], }, // 94
  { pos: [0.5,  0.5, -1],   norm: [-1,  0,  0], uv: [0.25, 0.75], }, // 95
  // left
  // 1
  { pos: [-1,   -1,  -1], norm: [-1,  0,  0], uv: [0,    0], }, // 96
  { pos: [-1, -1,  -0.5], norm: [-1,  0,  0], uv: [0.25, 0], }, // 97
  { pos: [-1,    1,  -1], norm: [-1,  0,  0], uv: [0,    1], }, // 98
  { pos: [-1,  1,  -0.5], norm: [-1,  0,  0], uv: [0.25, 1], }, // 99
  // 2
  { pos: [-1, -1, 0.5], norm: [-1,  0,  0], uv: [0.75, 0], }, // 100
  { pos: [-1, -1, 1  ], norm: [-1,  0,  0], uv: [1,    0], }, // 101
  { pos: [-1,  1, 0.5], norm: [-1,  0,  0], uv: [0.75, 1], }, // 102
  { pos: [-1,  1, 1  ], norm: [-1,  0,  0], uv: [1,    1], }, // 103
  // 3
  { pos: [-1,  -1,   -0.5], norm: [-1,  0,  0], uv: [0.25, 0], }, // 104
  { pos: [-1,  -1,    0.5], norm: [-1,  0,  0], uv: [0.75, 0], }, // 105
  { pos: [-1,  -0.5, -0.5], norm: [-1,  0,  0], uv: [0.25, 0.25], }, // 106
  { pos: [-1,  -0.5,  0.5], norm: [-1,  0,  0], uv: [0.75, 0.25], }, // 107
  // 4
  { pos: [-1, 0.5,  -0.5], norm: [-1,  0,  0], uv: [0.25, 0.75], }, // 108
  { pos: [-1, 0.5,   0.5], norm: [-1,  0,  0], uv: [0.75, 0.75], }, // 109
  { pos: [-1, 1,    -0.5], norm: [-1,  0,  0], uv: [0.25, 1], }, // 110
  { pos: [-1, 1,     0.5], norm: [-1,  0,  0], uv: [0.75, 1], }, // 111
  // 5
  { pos: [-1,   -0.5, -0.5], norm: [0,  1,  0], uv: [0.25, 0.25], }, // 112
  { pos: [-1,   -0.5,  0.5], norm: [0,  1,  0], uv: [0.75, 0.25], }, // 113
  { pos: [-0.5, -0.5, -0.5], norm: [0,  1,  0], uv: [0.25, 0.5], }, // 114
  { pos: [-0.5, -0.5,  0.5], norm: [0,  1,  0], uv: [0.75, 0.5], }, // 115
  // 6
  { pos: [-0.5, 0.5, -0.5], norm: [0,  -1,  0], uv: [0.25, 0.5], }, // 116
  { pos: [-0.5, 0.5,  0.5], norm: [0,  -1,  0], uv: [0.75, 0.5], }, // 117
  { pos: [-1,   0.5, -0.5], norm: [0,  -1,  0], uv: [0.25, 0.75], }, // 118
  { pos: [-1,   0.5,  0.5], norm: [0,  -1,  0], uv: [0.75, 0.75], }, // 119
  // 7
  { pos: [-1,   -0.5,  0.5], norm: [0,  0, 1], uv: [0.75, 0.25], }, // 120
  { pos: [-1,    0.5,  0.5], norm: [0,  0, 1], uv: [0.75, 0.75], }, // 121
  { pos: [-0.5, -0.5,  0.5], norm: [0,  0, 1], uv: [0.5,  0.25], }, // 122
  { pos: [-0.5,  0.5,  0.5], norm: [0,  0, 1], uv: [0.5,  0.75], }, // 123
  // 8
  { pos: [-0.5, -0.5, -0.5], norm: [0,  0, -1], uv: [0.5,  0.25], }, // 124
  { pos: [-0.5,  0.5, -0.5], norm: [0,  0, -1], uv: [0.5,  0.75], }, // 125
  { pos: [-1,   -0.5, -0.5], norm: [0,  0, -1], uv: [0.25, 0.25], }, // 126
  { pos: [-1,    0.5, -0.5], norm: [0,  0, -1], uv: [0.25, 0.75], }, // 127
  // top
  // 1
  { pos: [1,   1, -1], norm: [0,  1,  0], uv: [0,    0], }, // 128
  { pos: [0.5, 1, -1], norm: [0,  1,  0], uv: [0.25, 0], }, // 129
  { pos: [1,   1,  1], norm: [0,  1,  0], uv: [0,    1], }, // 130
  { pos: [0.5, 1,  1], norm: [0,  1,  0], uv: [0.25, 1], }, // 131
  // 2
  { pos: [-0.5, 1, -1], norm: [0,  1,  0], uv: [0.75, 0], }, // 132
  { pos: [-1,   1, -1], norm: [0,  1,  0], uv: [1,    0], }, // 133
  { pos: [-0.5, 1,  1], norm: [0,  1,  0], uv: [0.75, 1], }, // 134
  { pos: [-1,   1,  1], norm: [0,  1,  0], uv: [1,    1], }, // 135
  // 3
  { pos: [ 0.5, 1, -1  ], norm: [0,  1,  0], uv: [0.25, 0], }, // 136
  { pos: [-0.5, 1, -1  ], norm: [0,  1,  0], uv: [0.75, 0], }, // 137
  { pos: [ 0.5, 1, -0.5], norm: [0,  1,  0], uv: [0.25, 0.25], }, // 138
  { pos: [-0.5, 1, -0.5], norm: [0,  1,  0], uv: [0.75, 0.25], }, // 139
  // 4
  { pos: [0.5,  1, 0.5], norm: [0,  1,  0], uv: [0.25, 0.75], }, // 140
  { pos: [-0.5, 1, 0.5], norm: [0,  1,  0], uv: [0.75, 0.75], }, // 141
  { pos: [0.5,  1,   1], norm: [0,  1,  0], uv: [0.25, 1], }, // 142
  { pos: [-0.5, 1,   1], norm: [0,  1,  0], uv: [0.75, 1], }, // 143
  // 5
  { pos: [0.5,  1  ,  -0.5], norm: [0,  0,  1], uv: [0.25, 0.25], }, // 144
  { pos: [-0.5, 1  ,  -0.5], norm: [0,  0,  1], uv: [0.75, 0.25], }, // 145
  { pos: [0.5,  0.5,  -0.5], norm: [0,  0,  1], uv: [0.25, 0.5], }, // 146
  { pos: [-0.5, 0.5,  -0.5], norm: [0,  0,  1], uv: [0.75, 0.5], }, // 147
  // 6
  { pos: [0.5,  0.5,  0.5], norm: [0,  0, -1], uv: [0.25, 0.5], }, // 148
  { pos: [-0.5, 0.5,  0.5], norm: [0,  0, -1], uv: [0.75, 0.5], }, // 149
  { pos: [0.5,  1  ,  0.5], norm: [0,  0, -1], uv: [0.25, 0.75], }, // 150
  { pos: [-0.5, 1  ,  0.5], norm: [0,  0, -1], uv: [0.75, 0.75], }, // 151
  // 7
  { pos: [-0.5, 1  , -0.5],   norm: [1,   0,  0], uv: [0.75, 0.25], }, // 152
  { pos: [-0.5, 1  ,  0.5],   norm: [1,   0,  0], uv: [0.75, 0.75], }, // 153
  { pos: [-0.5, 0.5, -0.5], norm:   [1,   0,  0], uv: [0.5,  0.25], }, // 154
  { pos: [-0.5, 0.5,  0.5], norm:   [1,   0,  0], uv: [0.5,  0.75], }, // 155
  // 8
  { pos: [0.5, 0.5, -0.5], norm: [-1,  0,  0], uv: [0.5,  0.25], }, // 156
  { pos: [0.5, 0.5,  0.5], norm: [-1,  0,  0], uv: [0.5,  0.75], }, // 157
  { pos: [0.5, 1  , -0.5], norm: [-1,  0,  0], uv: [0.25, 0.25], }, // 158
  { pos: [0.5, 1  ,  0.5], norm: [-1,  0,  0], uv: [0.25, 0.75], }, // 159
  // bottom
  // 1
  { pos: [1,   -1,  1], norm: [0,  -1,  0], uv: [0,    0], }, // 160
  { pos: [0.5, -1,  1], norm: [0,  -1,  0], uv: [0.25, 0], }, // 161
  { pos: [1,   -1, -1], norm: [0,  -1,  0], uv: [0,    1], }, // 162
  { pos: [0.5, -1, -1], norm: [0,  -1,  0], uv: [0.25, 1], }, // 163
  // 2
  { pos: [-0.5, -1,  1], norm: [0,  -1,  0], uv: [0.75, 0], }, // 164
  { pos: [-1,   -1,  1], norm: [0,  -1,  0], uv: [1,    0], }, // 165
  { pos: [-0.5, -1, -1], norm: [0,  -1,  0], uv: [0.75, 1], }, // 166
  { pos: [-1,   -1, -1], norm: [0,  -1,  0], uv: [1,    1], }, // 167
  // 3
  { pos: [ 0.5, -1,  1  ], norm: [0,  -1,  0], uv: [0.25, 0], }, // 168
  { pos: [-0.5, -1,  1  ], norm: [0,  -1,  0], uv: [0.75, 0], }, // 169
  { pos: [ 0.5, -1,  0.5], norm: [0,  -1,  0], uv: [0.25, 0.25], }, // 170
  { pos: [-0.5, -1,  0.5], norm: [0,  -1,  0], uv: [0.75, 0.25], }, // 171
  // 4
  { pos: [0.5,  -1, -0.5], norm: [0,  -1,  0], uv: [0.25, 0.75], }, // 172
  { pos: [-0.5, -1, -0.5], norm: [0,  -1,  0], uv: [0.75, 0.75], }, // 173
  { pos: [0.5,  -1,   -1], norm: [0,  -1,  0], uv: [0.25, 1], }, // 174
  { pos: [-0.5, -1,   -1], norm: [0,  -1,  0], uv: [0.75, 1], }, // 175
  // 5
  { pos: [0.5,  -1  ,  0.5], norm: [0,  0, -1], uv: [0.25, 0.25], }, // 176
  { pos: [-0.5, -1  ,  0.5], norm: [0,  0, -1], uv: [0.75, 0.25], }, // 177
  { pos: [0.5,  -0.5,  0.5], norm: [0,  0, -1], uv: [0.25, 0.5], }, // 178
  { pos: [-0.5, -0.5,  0.5], norm: [0,  0, -1], uv: [0.75, 0.5], }, // 179
  // 6
  { pos: [0.5,  -0.5, -0.5], norm: [0,  0,  1], uv: [0.25, 0.5], }, // 180
  { pos: [-0.5, -0.5, -0.5], norm: [0,  0,  1], uv: [0.75, 0.5], }, // 181
  { pos: [0.5,  -1  , -0.5], norm: [0,  0,  1], uv: [0.25, 0.75], }, // 182
  { pos: [-0.5, -1  , -0.5], norm: [0,  0,  1], uv: [0.75, 0.75], }, // 183
  // 7
  { pos: [-0.5, -1  ,  0.5], norm: [1,   0,  0], uv: [0.75, 0.25], }, // 184
  { pos: [-0.5, -1  , -0.5], norm: [1,   0,  0], uv: [0.75, 0.75], }, // 185
  { pos: [-0.5, -0.5,  0.5], norm: [1,   0,  0], uv: [0.5,  0.25], }, // 186
  { pos: [-0.5, -0.5, -0.5], norm: [1,   0,  0], uv: [0.5,  0.75], }, // 187
  // 8
  { pos: [0.5, -0.5,  0.5], norm: [-1,  0,  0], uv: [0.5,  0.25], }, // 188
  { pos: [0.5, -0.5, -0.5], norm: [-1,  0,  0], uv: [0.5,  0.75], }, // 189
  { pos: [0.5, -1  ,  0.5], norm: [-1,  0,  0], uv: [0.25, 0.25], }, // 190
  { pos: [0.5, -1  , -0.5], norm: [-1,  0,  0], uv: [0.25, 0.75], }, // 191
];

export default vertexes;
