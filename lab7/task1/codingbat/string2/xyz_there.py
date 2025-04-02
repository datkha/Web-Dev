def xyz_there(s):
    if s.startswith('xyz'):
        return True

    for i in range(1, len(s) - 2):
        if s[i-1] != '.' and s[i:i+3] == 'xyz':
            return True
            
    return False
