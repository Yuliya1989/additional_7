module.exports = function solveSudoku(matrix) {
  // your solution
positionsOfZeros=savePositions(matrix);  
function savePositions(m) {
var positionsOfZeros=[];
for(var i=0, length=m.length; i<length; i++) {
	for(var j=0; j<m[i].length; j++) {
		if(m[i][j]===0) {
		positionsOfZeros.push([i,j]);
		}
	}
}
return positionsOfZeros;
};

function checkRow(m,row,val) {
	for(var i=0, length=m[row].length; i<length; i++) {
		if(m[row][i]===val) {
		return false;
		}
	} return true;
};

function checkCol(m,col,val) {
	for(var i=0, length=m.length; i<length; i++) {
		if(m[i][col]===val) {
		return false;
		}
	} return true;
};

function checkField(m,col,row,val) {
var columnCorner=0,
rowCorner=0,
squareSize=3;
while(col>=columnCorner+squareSize) {
columnCorner+=squareSize;
}
while(row>=rowCorner+squareSize) {
rowCorner+=squareSize;
}
for(var i=rowCorner; i<rowCorner+squareSize; i++) {
	for(var j=columnCorner; j<columnCorner+squareSize; j++) {
		if(m[i][j]===val) {
		return false;
		}
	}
}
return true;
};

function checkValue(m,col,row,val) {
	if(checkRow(m,row,val)&&checkCol(m,col,val)&&checkField(m,col,row,val)) {
	return true;
	} else {
	return false;
	}
};

function solve(m,positionsOfZeros) {
var limit=9, i, row, col, val, found;

for(var i=0; i<positionsOfZeros.length;) {
row=positionsOfZeros[i][0];
col=positionsOfZeros[i][1];
val=m[row][col]+1;
found=false;
while(!found&&val<=limit) {
	if(checkValue(m,col,row,val)) {
	found=true;
	m[row][col]=val;
	i++;
	} else {
	val++;
	}
}
if(!found) {
m[row][col]=0;
i--;
}
}
return m;
};

return solve(matrix,positionsOfZeros);
}
