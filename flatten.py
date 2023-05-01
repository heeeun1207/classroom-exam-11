# gpt 친구 도움을 받았습니다....
#재귀적으로 호출되는 flatten 함수가 입력으로 주어진 다차원 리스트를 일차원 리스트로 변환
example = [[1,2,3 ] , [4,[5,6]],7, [8,9]]

def flatten(data):
    output = []
    for item in data:
        if type(item) == list:
            # 재귀적으로 처리 
            output += flatten(item)
        else:
            output.append(item)
    return output

print(flatten(example))
# python3.10 flatten.py 
# 파이썬 !!! 

